import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";

const people = [
  {
    id: "1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212",
    title: "suknaya vanganuru"
  },
  {
    id: "2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212",

    title: "suknaya vanganuru"
  },
  {
    id: "3",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212",

    title: "suknaya vanganuru"
  },
  {
    id: "4",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212",
    title: "suknaya vanganuru"
  },
  {
    id: "5",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212",

    title: "suknaya vanganuru"
  },
  {
    id: "6",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212",

    title: "suknaya vanganuru"
  },
  {
    id: "7",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212",
    title: "suknaya vanganuru"
  },
  {
    id: "8",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212",

    title: "suknaya vanganuru"
  },
  {
    id: "9",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212",

    title: "suknaya vanganuru"
  },
  {
    id: "10",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212",
    title: "suknaya vanganuru"
  },
  {
    id: "11",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212",

    title: "suknaya vanganuru"
  },
  {
    id: "12",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212",

    title: "suknaya vanganuru"
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => (
          <View style={styles.content} key={item.id}>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
            <Text style={styles.item}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    felx: 1,
    backgroundColor: "#fff"
  },
  content: {
    flexDirection: "row",
    margin: 40
  },
  item: {
    padding: 20,
    backgroundColor: "pink",
    fontSize: 20
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 50
  }
});
