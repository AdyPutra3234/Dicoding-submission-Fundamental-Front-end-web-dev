class SearchResult extends HTMLElement {

        set Data (data) {
            this._data = data;
            this.render();
        }

        set Search (key) {
          this._key = key;
        }

    render() {
        this.innerHTML = "";
        this.innerHTML += `
                    <style>
                      .sr .col {
                        height: 100px;
                      }

                      .sr h6 {
                          padding: 5px;
                          font-weight: 300;
                          font-size: small;
                      }
                      
                      #search_title {
                        margin-bottom: 10px;
                      }

                      .searchResult {
                        margin-top: 40px;
                      }
                    </style>  

                    <div class="row searchResult">
                        <div class="col-md-12">
                          <h5>Search result :</h5>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                      <div class="col-md-5 bg-light card text-center" id="search_title">
                        <h5>${this._key}</h5>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col bg-cnf">
                        <div class="row">
                          <h6>CONFIRMED</h6>
                        </div>
                        <div class="row justify-content-center">
                          <h4>${this._data.confirmed.value}</h4>
                        </div>
                      </div>

                      <div class="col bg-rvr">
                        <div class="row">
                          <h6>RECOVERED</h6>
                        </div>
                        <div class="row justify-content-center">
                          <h4>${this._data.recovered.value}</h4>
                        </div>
                      </div>

                      <div class="col bg-dth">
                        <div class="row">
                          <h6>DEATHS</h6>
                        </div>
                        <div class="row justify-content-center">
                          <h4>${this._data.deaths.value}</h4>
                        </div>
                      </div>`;
    }

    renderError(error) {
      this.innerHTML = `
              <div class="row searchResult">
                <div class="col-md-12">
                  <h5>Search result :</h5>
                  <h4 class="text-center">!!!Oops ${error.message}</h4>
                </div>
              </div>`;
    }
}

customElements.define("search-result" , SearchResult);