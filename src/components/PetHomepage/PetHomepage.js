import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './style.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PetHomepage extends Component {
  state = {
    heading: 'Welcome!',
  };

  nextPage = () => {
    console.log('clicked');
    this.props.history.push('/1');
  }

  componentDidMount = () => {
    this.getPet();
  }

  getPet = () => {
    console.log('get pet');
    this.props.dispatch( {type:'GET_PET'});
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        {JSON.stringify(this.props.store.pet)}


          <div className="description">
                <p>This describes the whole app.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              id felis metus. Vestibulum et pulvinar tortor. Morbi pharetra
              lacus ut ex molestie blandit. Etiam et turpis sit amet risus
              mollis interdum. Suspendisse et justo vitae metus bibendum
              fringilla sed sed justo. Aliquam sollicitudin dapibus lectus,
              vitae consequat odio elementum eget. Praesent efficitur eros vitae
              nunc interdum, eu interdum justo facilisis. Sed pulvinar nulla ac
              dignissim efficitur. Quisque eget eros metus. Vestibulum bibendum
              fringilla nibh a luctus. Duis a sapien metus.
            </p>

            <p>
              Praesent consectetur orci dui, id elementum eros facilisis id. Sed
              id dolor in augue porttitor faucibus eget sit amet ante. Nunc
              consectetur placerat pharetra. Aenean gravida ex ut erat commodo,
              ut finibus metus facilisis. Nullam eget lectus non urna rhoncus
              accumsan quis id massa. Curabitur sit amet dolor nisl. Proin
              euismod, augue at condimentum rhoncus, massa lorem semper lacus,
              sed lobortis augue mi vel felis. Duis ultrices sapien at est
              convallis congue.
            </p>

            <p>
              Fusce porta diam ac tortor elementum, ut imperdiet metus volutpat.
              Suspendisse posuere dapibus maximus. Aliquam vitae felis libero.
              In vehicula sapien at semper ultrices. Vivamus sed feugiat libero.
              Sed sagittis neque id diam euismod, ut egestas felis ultricies.
              Nullam non fermentum mauris. Sed in enim ac turpis faucibus
              pretium in sit amet nisi.
            </p>
          </div>
            

        <button onClick={this.nextPage}>Ready to Choose Pet!</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PetHomepage);
