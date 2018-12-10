import * as React from 'react';
import 'src/css/Product.css';
import { Layout } from 'src/components';

interface Props {

}

interface State {
  list: Array<any>,
  item: any,
}

class Product extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      list: [],
      item: null,
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.loadProducts();
  }

  private loadProducts() {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(response => response.json())
      .then(json => {
        this.setState({
          list: json,
        });
      });
  }

  render() {
    console.log('render');

    return (
      <Layout>
        <div className="product">
          {this.state.list.map((item, index) => {
            return (

              <div className="media" key={index} >
                <a className="d-flex" href="#">
                  <img src={item.thumbnailUrl} alt="" />
                </a>
                <div className="media-body">
                  <h5>{item.title}</h5>
                  {item.url}
                </div>
              </div>
            );
          })
          }
        </div>
      </Layout>
    );
  }
}
export default Product;