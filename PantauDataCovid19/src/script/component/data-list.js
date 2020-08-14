import "./list-item.js";

class dataList extends HTMLElement {

    set dataList (list) {
        this._list = list;
        this.render();
    }

    set Check(check) {
        this._check = check;
    }

    render() {
        this.innerHTML = "";

        if (this._check) {
            this._list.forEach(data => {
                const listItemElement = document.createElement("list-item");
                listItemElement.Data = data.attributes;
                this.appendChild(listItemElement); 
            })
        } else {
            this._list.forEach(data => {
                const listItemElement = document.createElement("list-item");
                listItemElement.Data = data.properties;
                this.appendChild(listItemElement); 
            })
        }
        
    }
}

customElements.define("data-list", dataList);