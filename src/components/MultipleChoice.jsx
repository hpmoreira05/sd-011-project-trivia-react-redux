import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showNextBtn } from '../actions';

class MultipleChoice extends React.Component {
  render() {
    const { question, showBtn } = this.props;
    return (
      question.answers.map((answer, index) => {
        if (question.correct_answer === answer) {
          return (
            <button
              data-testid="correct-answer"
              key={ index }
              type="button"
              onClick={ () => showBtn() }
            >
              { answer }
            </button>
          );
        }
        return (
          <button
            data-testid={ `wrong-answer-${index}` }
            key={ index }
            type="button"
            onClick={ () => showBtn() }
          >
            { answer }
          </button>
        );
      })
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showBtn: () => dispatch(showNextBtn()),
});

MultipleChoice.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.string),
    correct_answer: PropTypes.string,
  }).isRequired,
  showBtn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(MultipleChoice);
