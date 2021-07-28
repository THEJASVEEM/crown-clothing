import React, { Component } from 'react';
import SHOP_ITEMS from './SHOP_ITEMS';
import PreviewCollection from '../../components/preview-collections/previrew-collection.component';


class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            collections: SHOP_ITEMS
         }
    }
    render() { 
        const {collections} = this.state;
        // console.log(collections)
        return ( <div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectionsProps}) => (
                    <PreviewCollection key={id} {...otherCollectionsProps} />
                ))
            }
        </div> );
    }
}
 
export default ShopPage;