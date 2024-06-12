import React, { useState } from 'react';
import { View, StyleSheet, TextInput, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar, Card } from 'react-native-paper';
import OpenAI from "openai";

interface Memory {
  shading_sunlight_status: ShadingSunlightStatus[];
  irrigation_status: IrrigationStatus[];
}

interface ShadingSunlightStatus {
  plotIndex: number;
  status: string;
  columns: ShadingSunlightColumn[];
}

interface ShadingSunlightColumn {
  columnIndex: number;
  isShadingOpen: boolean;
  shadingStrength: number;
  enableNotifications: boolean;
}

interface IrrigationStatus {
  plotIndex: number;
  status: string;
  columns: IrrigationColumn[];
}

interface IrrigationColumn {
  columnIndex: number;
  waterQuantityPerSession: number;
  frequency: number;
  enableNotifications: boolean;
}

const openai = new OpenAI({
  apiKey: 'type your api key here', //sk-proj-ydQW9xzVqNUlT1XKrSXkT3BlbkFJpOP8aOVzj9Rgno5PFEC2
  dangerouslyAllowBrowser: true
});

const SocialScreen = (): JSX.Element => {
  const memory: Memory = {
    shading_sunlight_status: [
      {
        plotIndex: 1,
        status: "Good",
        columns: [
          {
            columnIndex: 1,
            isShadingOpen: true,
            shadingStrength: 70,
            enableNotifications: true
          },
          {
            columnIndex: 2,
            isShadingOpen: false,
            shadingStrength: 50,
            enableNotifications: false
          },
          {
            columnIndex: 3,
            isShadingOpen: false,
            shadingStrength: 50,
            enableNotifications: true
          }
        ]
      },
      {
        plotIndex: 2,
        status: "In Progress",
        columns: [
          {
            columnIndex: 1,
            isShadingOpen: true,
            shadingStrength: 70,
            enableNotifications: true
          },
          {
            columnIndex: 2,
            isShadingOpen: false,
            shadingStrength: 50,
            enableNotifications: false
          },
          {
            columnIndex: 3,
            isShadingOpen: false,
            shadingStrength: 50,
            enableNotifications: true
          }
        ]
      },
      {
        plotIndex: 3,
        status: "Good",
        columns: [
          {
            columnIndex: 1,
            isShadingOpen: true,
            shadingStrength: 70,
            enableNotifications: true
          },
          {
            columnIndex: 2,
            isShadingOpen: false,
            shadingStrength: 50,
            enableNotifications: false
          },
          {
            columnIndex: 3,
            isShadingOpen: false,
            shadingStrength: 50,
            enableNotifications: true
          }
        ]
      },
      {
        plotIndex: 4,
        status: "Good",
        columns: [
          {
            columnIndex: 1,
            isShadingOpen: true,
            shadingStrength: 70,
            enableNotifications: true
          },
          {
            columnIndex: 2,
            isShadingOpen: false,
            shadingStrength: 50,
            enableNotifications: false
          },
          {
            columnIndex: 3,
            isShadingOpen: false,
            shadingStrength: 50,
            enableNotifications: true
          }
        ]
      },
      {
        plotIndex: 5,
        status: "Good",
        columns: [
          {
            columnIndex: 1,
            isShadingOpen: true,
            shadingStrength: 70,
            enableNotifications: true
          },
          {
            columnIndex: 2,
            isShadingOpen: false,
            shadingStrength: 50,
            enableNotifications: false
          },
          {
            columnIndex: 3,
            isShadingOpen: false,
            shadingStrength: 50,
            enableNotifications: true
          }
        ]
      }
    ],
    irrigation_status: [
      {
        plotIndex: 1,
        status: "Bad",
        columns: [
          {
            columnIndex: 1,
            waterQuantityPerSession: 20,
            frequency: 10,
            enableNotifications: true
          },
          {
            columnIndex: 2,
            waterQuantityPerSession: 25,
            frequency: 7,
            enableNotifications: false
          },
          {
            columnIndex: 3,
            waterQuantityPerSession: 20,
            frequency: 10,
            enableNotifications: true
          }
        ]
      },
      {
        plotIndex: 2,
        status: "In Progress",
        columns: [
          {
            columnIndex: 1,
            waterQuantityPerSession: 20,
            frequency: 10,
            enableNotifications: true
          },
          {
            columnIndex: 2,
            waterQuantityPerSession: 10,
            frequency: 20,
            enableNotifications: false
          },
          {
            columnIndex: 3,
            waterQuantityPerSession: 20,
            frequency: 10,
            enableNotifications: true
          }
        ]
      },
      {
        plotIndex: 3,
        status: "Maintenance",
        columns: [
          {
            columnIndex: 1,
            waterQuantityPerSession: 20,
            frequency: 10,
            enableNotifications: true
          },
          {
            columnIndex: 2,
            waterQuantityPerSession: 20,
            frequency: 10,
            enableNotifications: true
          },
          {
            columnIndex: 3,
            waterQuantityPerSession: 20,
            frequency: 10,
            enableNotifications: true
          }
        ]
      },
      {
        plotIndex: 4,
        status: "Good",
        columns: [
          {
            columnIndex: 1,
            waterQuantityPerSession: 20,
            frequency: 10,
            enableNotifications: true
          },
          {
            columnIndex: 2,
            waterQuantityPerSession: 20,
            frequency: 10,
            enableNotifications: false
          },
          {
            columnIndex: 3,
            waterQuantityPerSession: 20,
            frequency: 10,
            enableNotifications: true
          }
        ]
      },
      {
        plotIndex: 5,
        status: "In Progress",
        columns: [
          {
            columnIndex: 1,
            waterQuantityPerSession: 50,
            frequency: 2,
            enableNotifications: true
          },
          {
            columnIndex: 2,
            waterQuantityPerSession: 10,
            frequency: 20,
            enableNotifications: true
          },
          {
            columnIndex: 3,
            waterQuantityPerSession: 20,
            frequency: 10,
            enableNotifications: false
          }
        ]
      }
    ]
  }
  const [messages, setMessages] = useState<{ text: string, sender: string }[]>([{ text: 'Hi! How can I help you today?', sender: 'bot' }]);
  const [inputText, setInputText] = useState<string>('');
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
  };

  const sendMessage = async () => {
    if (inputText.trim() === '') return;

    const newMessages = [...messages, { text: inputText, sender: 'user' }];
    setMessages(newMessages);
    setInputText('');

    const botReply = await generateBotResponse(inputText);
    setMessages((prevMessages) => [...prevMessages, { text: botReply, sender: 'bot' }]);
  };

  const generateBotResponse = async (inputText: string): Promise<string> => {
    try {
      const memoryPrompt = `You are AgriSmart, an AI chatbot designed to assist farmers with smart agriculture solutions, focusing on mitigating climate change impacts through precision farming, resource optimization, and data analytics. Your role includes providing information, advice, and updates on various agricultural parameters based on the current state of the farm. Here are IMPORTANT DATA relating to your farm ${JSON.stringify(memory)}`;
      const prompt = `${memoryPrompt} Now here is the question, answer it and remember your purpose and data: ${inputText}\nBot:`;

      const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        temperature: 0,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      return completion.choices[0].text.trim()
    } catch (error) {
      console.error(error);
      return 'I apologize, but there was an error processing your request. Please try again.';
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleBackButton} />
        <Appbar.Content title="AgriSmart AI ChatBot" />
      </Appbar.Header>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <Card key={index} style={message.sender === 'user' ? styles.userMessage : styles.botMessage}>
            <Text>{message.text}</Text>
          </Card>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  messagesContainer: {
    flex: 1,
    padding: 15,
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
  },
  botMessage: {
    backgroundColor: '#F1F0F0',
    alignSelf: 'flex-start',
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 15,
    borderTopWidth: 3,
    borderColor: 'black',
    backgroundColor: 'lightgray',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  sendButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sendButtonText: {
    color: '#fff',
  },
});

export default SocialScreen;