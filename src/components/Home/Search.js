import React from "react";

import Autocomplete from "react-autocomplete";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      keyPressName: null
    };
  }

  componentDidMount() {
    document.onkeypress = function(key_dtl) {
      key_dtl = key_dtl || window.event;
      let uni_code = key_dtl.keyCode || key_dtl.which;
      let key_name = String.fromCharCode(uni_code);
      if (key_name) {
        document.getElementById("myOverlay").style.display = "block";
      }
    };
  }

  closeSearch = () => {
    document.getElementById("myOverlay").style.display = "none";
  };

  render() {
    return (
      <React.Fragment>
        <div id="myOverlay" className="overlay">
          <span
            className="closebtn"
            onClick={this.closeSearch}
            title="Close Overlay"
          >
            x
          </span>
          <div className="overlay-content">
            <Autocomplete
              items={[
                { id: "1 Esdras", label: "1 Esdras" },
                { id: "2 Esdras", label: "2 Esdras" },
                { id: "Tobit", label: "Tobit" },
                { id: "Judith", label: "Judith" },
                { id: "Additions to Esther", label: "Additions to Esther" },
                { id: "Wisdom of Solomon", label: "Wisdom of Solomon" },
                { id: "Ecclesiasticus", label: "Ecclesiasticus" },
                { id: "Baruch", label: "Baruch" },
                { id: "Letter of Jeremiah", label: "Letter of Jeremiah" },
                { id: "Prayer of Azariah", label: "Prayer of Azariah" },
                { id: "Susanna", label: "Susanna" },
                { id: "Bel and the Dragon", label: "Bel and the Dragon" },
                { id: "Prayer of Manasseh", label: "Prayer of Manasseh" },
                { id: "1 Maccabees", label: "1 Maccabees" },
                { id: "2 Maccabees", label: "2 Maccabees" }
              ]}
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              getItemValue={item => item.label}
              renderItem={(item, highlighted) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: highlighted ? "#eee" : "transparent"
                  }}
                >
                  {item.label}
                </div>
              )}
              value={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
              onSelect={value => this.setState({ value })}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
