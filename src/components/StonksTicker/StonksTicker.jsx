import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { io } from 'socket.io-client'

import Auth from './Auth'
import Game from './Game'


class StonksTicker extends Component
{
    constructor()
    {
        super();
        this.state = { socket: io("https://stonks.guibi.ca"), connectionError: false };
        this.state.socket.on("connect", () => {
            this.state.socket.emit("0", "1");
            this.setState({ connectionError: false });
        });
        this.state.socket.on("connect_error", () => { this.setState({ connectionError: true }); });
    }
    
    render ()
    {
        return (
            <div className="page">
                <Helmet><title>Stonks Ticker - Guibi.ca</title></Helmet>
                <h1>Stonks Ticker</h1>
                <h2>Stocks Ticker avec vos amis</h2>

                {this.state.socket?.connected ?
                    <Auth socket={this.state.socket}/> :
                    (this.state.connectionError ?
                        <p>Couldn't connect to the game server.</p> :
                        <p>Connectiong to game server...</p>
                    )
                }
            </div>
        );
    }
}


export default StonksTicker