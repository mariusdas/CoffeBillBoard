import React, { Component } from 'react';

export class AddCoffe extends Component {
    constructor() {
        super();
        this.state = { selectedFile: null };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        data.append("file", document.getElementById("Image").files[0]);
        fetch('/api/CoffeData/AddCoffe', {
            method: 'POST',
            body: data,
            
        }).then(data => {
            window.location.reload();
        });;
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label htmlFor="CoffeName">Enter Coffe Name:</label>
                    <input id="CoffeName" name="CoffeName" type="text" />
                </div>
                <div class="form-group">
                    <label htmlFor="CoffePrice">Enter Coffe Price:</label>
                    <input id="CoffePrice" name="CoffePrice" type="text" />
                </div>
                <div class="form-group">
                    <label htmlFor="Image">Enter Image:</label>
                    <input id="Image" name="Image" type="file" />
                </div>
                <div class="form-group">
                    <button class="btn btn-default">Submit!</button>
                </div>
            </form>
        );
    }
}