import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
      this.state = { TblCoffes: [], loading: true };

    fetch('api/CoffeData/AllCoffe')
      .then(response => response.json())
      .then(data => {
          this.setState({ TblCoffes: data, loading: false });
      });
    }

    // Handle Delete request  
    static handleDelete(event) {
        event.preventDefault();

        fetch('/api/CoffeData/DeleteCoffe', {
            method: 'Delete',
            headers: {
                'value': event.target.value,
            },
        }).then(data => {
            window.location.reload();
        });
    }

    static renderCoffesTable(TblCoffes) {
        const items = [];
        for (var i = 0; i < TblCoffes.length; i=i+4) {
            
            if (i + 3 < TblCoffes.length) {                
                var img1 = "data:image/jpeg;base64," + TblCoffes[i].imageToBase64;
                var img2 = "data:image/jpeg;base64," + TblCoffes[i + 1].imageToBase64;
                var img3 = "data:image/jpeg;base64," + TblCoffes[i + 2].imageToBase64;
                var img4 = "data:image/jpeg;base64," + TblCoffes[i + 3].imageToBase64;
                items.push(<div class="row-container" style={{ display: 'flex' }} >
                    <div class="col-4" key={TblCoffes[i].coffeId}>                   
                        <div class="col-2" style={{ padding: '50px 50px 50px 50px' }}><img id="ItemPreview1" src={img1} width="100px" height="100px" /></div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}><img id="ItemPreview"/></div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Name: {TblCoffes[i].name}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Price: {TblCoffes[i].price}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}><button onClick={this.handleDelete} value={TblCoffes[i].coffeId}>Delete</button></div>
                    </div>
                    <div class="col-4" key={TblCoffes[i + 1].coffeId}>
                        <div class="col-2" style={{ padding: '50px 50px 50px 50px' }}><img id="ItemPreview2" src={img2} width="100px" height="100px" /></div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Name: {TblCoffes[i + 1].name}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Price: {TblCoffes[i + 1].price}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}><button onClick={this.handleDelete} value={TblCoffes[i + 1].coffeId}>Delete</button></div>
                    </div>
                    <div class="col-4" key={TblCoffes[i + 2].coffeId}>
                        <div class="col-2" style={{ padding: '50px 50px 50px 50px' }}><img id="ItemPreview3" src={img3} width="100px" height="100px" /></div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Name: {TblCoffes[i + 2].name}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Price: {TblCoffes[i + 2].price}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}><button onClick={this.handleDelete} value={TblCoffes[i + 2].coffeId}>Delete</button></div>
                    </div>
                    <div class="col-4" key={TblCoffes[i + 3].coffeId}>
                        <div class="col-2" style={{ padding: '50px 50px 50px 50px' }}><img id="ItemPreview4" src={img4} width="100px" height="100px" /></div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Name: {TblCoffes[i + 3].name}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Price: {TblCoffes[i + 3].price}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}><button onClick={this.handleDelete} value={TblCoffes[i + 3].coffeId}>Delete</button></div>
                    </div>
                </div>)
            }
            else if (i + 2 < TblCoffes.length) {
                var img1 = "data:image/jpeg;base64," + TblCoffes[i].imageToBase64;
                var img2 = "data:image/jpeg;base64," + TblCoffes[i + 1].imageToBase64;
                var img3 = "data:image/jpeg;base64," + TblCoffes[i + 2].imageToBase64;
                items.push(<div class="row-container" style={{ display: 'flex' }} >
                    <div class="col-4" key={TblCoffes[i].coffeId}>
                        <div class="col-2" style={{ padding: '50px 50px 50px 50px' }}><img id="ItemPreview1" src={img1} width="100px" height="100px" /></div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Name: {TblCoffes[i].name}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Price: {TblCoffes[i].price}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}><button onClick={this.handleDelete} value={TblCoffes[i].coffeId}>Delete</button></div>
                    </div>
                    <div class="col-4" key={TblCoffes[i + 1].coffeId}>
                        <div class="col-2" style={{ padding: '50px 50px 50px 50px' }}><img id="ItemPreview2" src={img2} width="100px" height="100px" /></div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Name: {TblCoffes[i + 1].name}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Price: {TblCoffes[i + 1].price}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}><button onClick={this.handleDelete} value={TblCoffes[i + 1].coffeId}>Delete</button></div>
                    </div>
                    <div class="col-4" key={TblCoffes[i + 2].coffeId}>
                        <div class="col-2" style={{ padding: '50px 50px 50px 50px' }}><img id="ItemPreview3" src={img3} width="100px" height="100px" /></div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Name: {TblCoffes[i + 2].name}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Price: {TblCoffes[i + 2].price}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}><button onClick={this.handleDelete} value={TblCoffes[i + 2].coffeId}>Delete</button></div>
                    </div>
                </div>)
            }
            else if (i + 1 < TblCoffes.length) {
                var img1 = "data:image/jpeg;base64," + TblCoffes[i].imageToBase64;
                var img2 = "data:image/jpeg;base64," + TblCoffes[i+1].imageToBase64;
                items.push(<div class="row-container" style={{ display: 'flex' }} >
                    <div class="col-4" key={TblCoffes[i].coffeId}>
                        <div class="col-2" style={{ padding: '50px 50px 50px 50px' }}><img id="ItemPreview1" src={img1} width="100px" height="100px" /></div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Name: {TblCoffes[i].name}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Price: {TblCoffes[i].price}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}><button onClick={this.handleDelete} value={TblCoffes[i].coffeId}>Delete</button></div>
                    </div>
                    <div class="col-4" key={TblCoffes[i + 1].coffeId}>
                        <div class="col-2" style={{ padding: '50px 50px 50px 50px' }}><img id="ItemPreview2" src={img2} width="100px" height="100px" /></div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Name: {TblCoffes[i + 1].name}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Price: {TblCoffes[i + 1].price}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}><button onClick={this.handleDelete} value={TblCoffes[i + 1].coffeId}>Delete</button></div>
                    </div>
                </div>)
            }
            else if (i < TblCoffes.length) {
                var img1 = "data:image/jpeg;base64," + TblCoffes[i].imageToBase64;
                items.push(<div class="row-container" style={{ display: 'flex' }} >
                    <div class="col-4" key={TblCoffes[i].coffeId}>
                        <div class="col-2" style={{ padding: '50px 50px 50px 50px' }}><img id="ItemPreview1" src={img1} width="100px" height="100px" /></div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Name: {TblCoffes[i].name}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}>Price: {TblCoffes[i].price}</div>
                        <div class="col-2" style={{ padding: '5px 5px 5px 5px' }}><button onClick={this.handleDelete} value={TblCoffes[i].coffeId}>Delete</button></div>
                    </div>
                </div>)
            }
            
        }
        return (items);
    }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : FetchData.renderCoffesTable(this.state.TblCoffes);

    return (
      <div>
            <h1>Coffe BillBoard</h1>
            <a href="AddCoffe">Add Coffe</a>
            {contents}
      </div>
    );
  }
}
