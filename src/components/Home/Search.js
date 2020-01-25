import React from "react";

import Autosuggest from "react-autosuggest";
import { FaSearch } from "react-icons/fa";
import KeyboardEventHandler from "react-keyboard-event-handler";

const books = [
  {
    name: "1 Esdras"
  },
  {
    name: "2 Esdras"
  },
  {
    name: "Tobit"
  },
  {
    name: "Judith"
  },
  {
    name: "Additions to Esther"
  },
  {
    name: "Wisdom of Solomon"
  },
  {
    name: "Ecclesiasticus"
  },
  {
    name: "Baruch"
  },
  {
    name: "Letter of Jeremiah"
  },
  {
    name: "Prayer of Azariah"
  },
  {
    name: "Susanna"
  },
  {
    name: "Bel and the Dragon"
  },
  {
    name: "Prayer of Manasseh"
  },
  {
    name: "1 Maccabees"
  },
  {
    name: "2 Maccabees"
  }
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  const regex = new RegExp("^" + escapedValue, "i");
  return books.filter(books => regex.test(books.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      suggestions: []
    };
  }

  componentDidMount() {
    document.onkeypress = function(key_dtl) {
      key_dtl = key_dtl || window.event;
      let uni_code = key_dtl.keyCode || key_dtl.which;
      let key_name = String.fromCharCode(uni_code);
      if (key_name) {
        document.getElementById("myOverlay").style.display = "block";
        document.querySelector("input").setAttribute("autofocus", "autofocus");
      }
    };
  }

  closeSearch = () => {
    document.getElementById("myOverlay").style.display = "none";
    this.setState({
      value: ""
    });
  };

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleAutoFillKey = key => {
    const { value } = this.state;
    document.querySelector(".react-autosuggest__input").focus();
    document.querySelector("input").setAttribute("autofocus", "autofocus");
    if (value === "") {
      this.setState({
        value: key
      });
    }
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search...",
      value,
      onChange: this.onChange
    };
    return (
      <React.Fragment>
        <div id="myOverlay" className="overlay">
          <span className="closebtn" onClick={this.closeSearch} title="Close">
            x
          </span>
          <div className="overlay-content">
            <KeyboardEventHandler
              handleKeys={["all"]}
              onKeyEvent={key => this.handleAutoFillKey(key)}
            />
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              focusInputOnSuggestionClick={true}
              highlightFirstSuggestion={true}
              alwaysRenderSuggestions={true}
            />
            <button type="button">
              <FaSearch />
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
