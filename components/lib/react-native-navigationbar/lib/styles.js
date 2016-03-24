'use strict'

let React = require('react-native')

module.exports = React.StyleSheet.create({
  navbar: {
    // alignItems: 'center',
    justifyContent: 'center'
  },

  backWrapper: {
    height: 20,
    width: 100,
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    position: 'absolute',
    left: 12
  },

  icon: {
    position:'absolute',
    width: 14,
    height: 14,
    left: 2.5,
    top:3,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    transform: [{rotate: '45deg'}],
  },

  title: {
    marginLeft: 110,
    marginRight:110,
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  actionBtn: {
    height: 20,
    flex: 1,
    position: 'absolute',
    right: 12
  },

  actionIcon: {
    height: 35,
    width: 35,
    position: 'absolute',
    right: 3
  },

  actionName: {
    marginRight:5,
    fontSize: 14,
    width:80,
    marginLeft:14,
    textAlign:'left',
    alignSelf: 'center',
  }
})
