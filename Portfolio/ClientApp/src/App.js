import React, { Component } from 'react';
import './App.module.scss';
import BaseLayout from './components/BaseLayout';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <BaseLayout />
        );
    }
}
