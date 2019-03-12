import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar.js';
class App extends React.Component{
    state ={ images :[] };
    async onSearchSubmit(term) {
        const response = await unsplash.get('/search/photos' , {
            params: { query : term}
        });
        this.setState({ images: response.data.results })
    }
    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
                Found {this.state.images.length} images
            </div>
            );
        }
};
export default App;
