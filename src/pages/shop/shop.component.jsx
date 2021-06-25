import React, { Component } from "react";
import "./shop.styles.scss";
import shopData from "./shop.data.js";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class ShopPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: shopData,
		};
	}

	render() {
        const collections = this.state.collections;
		return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
	}
}

export default ShopPage;
