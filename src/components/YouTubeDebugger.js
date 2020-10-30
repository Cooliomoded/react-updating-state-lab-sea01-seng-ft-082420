import React, { Component } from 'react'

class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleSettingsClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        console.log(this.state.settings.bitrate)
        return(
            <div>
                <p>{this.state.settings.bitrate}</p>
                <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate Button</button>
                <p>{this.state.settings.video.resolution}</p>
                <button className="resolution" onClick={this.handleSettingsClick}>Resolution Button</button>
            </div>
        )
    }
}

export default YouTubeDebugger
