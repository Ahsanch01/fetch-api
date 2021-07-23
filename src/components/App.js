import React from "react";
import axios from "axios";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImagesList from "../components/imagesList";
class App extends React.Component {
  state = { images: [] };
  handleSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID z7mrB2CfQETkVtJGovoiEe_Ltrje3m8yjdw75s9q_80",
      },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onAhsan={this.handleSubmit} />
          <ImagesList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
