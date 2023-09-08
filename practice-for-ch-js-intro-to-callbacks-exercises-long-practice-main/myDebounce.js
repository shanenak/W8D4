Function.prototype.myDebounce = function(interval) {
    let countDown = false
    let timeOutID
    return () => {
        if (!countDown) {
            countDown = true
            timeOutID = setTimeout(()=>{
                countDown = false
                return this.apply()
            }, interval) 
        } else {
            clearTimeOut(timeOutID)
            // countDown = true
            // timeOutID = setTimeout(()=>{
            //     countDown = false
            //     return this.apply()
            // }, interval) 
        }
    }
}

class SearchBar {
    constructor() {
        this.query = "";
    
        this.type = this.type.bind(this);
        this.search = this.search.bind(this);
    }

    type(letter) {
        this.query += letter;
        this.search();
    }

    search() {
        console.log(`searching for ${this.query}`);
    }
}
const searchBar = new SearchBar();

const queryForHelloWorld = () => {
    searchBar.type("h");
    searchBar.type("e");
    searchBar.type("l");
    searchBar.type("l");
    searchBar.type("o");
    searchBar.type(" ");
    searchBar.type("w");
    searchBar.type("o");
    searchBar.type("r");
    searchBar.type("l");
    searchBar.type("d");
};

queryForHelloWorld();

searchBar.search = searchBar.search.myDebounce(500);