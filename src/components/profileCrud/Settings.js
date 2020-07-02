import React, {useState} from 'react';
import './Profile.css';
import { connect } from 'react-redux';
import { editProfile } from '../../redux/actions/changeprofile/changeprofile'

const Settings = (props) => {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState([]);
  const email = props.user.email;

  return (
    <div className="col-8 main">
      <div className="create-post-block">
        <form className="create-post-form d-flex flex-column align-items-center">
          <div className="settings-headline">Edit your profile</div>
          <label htmlFor="name" className="form-label mb-0 pl-2">Change username</label>
          <input
            name="name"
            id="name"
            type="text"
            value={name}
            className="form-input"
            placeholder="username"
            onChange={(e) => { setName(e.target.value) }}
          /> 
          <label htmlFor="change-profile-photo" className="form-label mb-1 pl-2">Edit profile picture </label>
          <input
            name="change-profile-photo"
            id="change-profile-photo"
            type="file"
           // accept="image/*"
            className="change-profile-photo mb-2 ml-0"
            onChange={(e) => { 
              setPicture(e.target.files[0]) 
            }}
          />
          <button
            type="submit"
            className="type-button type-button-submit mt-4"
            onClick={ (e) => {
              e.preventDefault()
              const file = picture;
              props.editProfile({email, name, file})
          }}
          >
            Apply changes
          </button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = dispatch => ({
  editProfile: data => dispatch(editProfile(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

