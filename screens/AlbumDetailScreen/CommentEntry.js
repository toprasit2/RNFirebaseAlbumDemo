import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function CommentEntry({ comment }) {
  return (
    <View style={styles.container}>
      <Text style={styles.comment}>{comment.comment}</Text>
      <Text style={styles.metadata}>
        <Text style={styles.bold}>From: </Text>
        {comment.name}
        <Text style={styles.bold}> On: </Text>
        {comment.timestamp.toString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  comment: {
    fontSize: 20,
  },
  metadata: {
    fontSize: 12,
    color: 'grey',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default CommentEntry;