import React from 'react';

const Pronunciation = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Pronunciation {this.props.student}</h1>
                {
                    this.props.words.map(word => {
                        return (
                            <p key={word.id}>{word.word} - {word.pronunciation}</p>
                        )
                    })
                }
            </div>
        );
    }
});

export default Pronunciation;