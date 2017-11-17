import React, { Component } from "react";
import { connect } from "rect-redux";
import { ListView } from "react-native";


class LibraryList extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow() {
        
    }

    render() {
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

}

const mapStateToProps = state => {
    return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);