
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native';

import Question from '../components/question';
import {connect} from 'react-redux';
import { getQuestion } from '../redux/actionTypes';
class QuestionView extends React.Component{

    componentDidMount = () =>{
        let {navigation,getQuestion} = this.props;
        let id = navigation.getParam('id');
        getQuestion(id);
    }
    
    render = () => {
        const {loading,question:{question,answer}} = this.props;
        return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    {loading?(
                        <Text>Yükleniyor...</Text>
                    ):(
                        <Question style={styles.question} question={question} answer={answer}/>
                    )}
                </View>
            </SafeAreaView>
        </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    question: state.question,
    loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
    getQuestion: (id) => dispatch(getQuestion(id))
})
 
const styles = StyleSheet.create({
    safeArea:{
    },
    container:{
        height:"100%"
    },
    button:{
      paddingVertical:50,
      backgroundColor:"orange"
    },
    buttonText:{
      fontSize:40,
      fontWeight: "bold"   
    },
    question:{
      flexGrow:1
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(QuestionView);

  