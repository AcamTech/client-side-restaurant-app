export default {
  getInitialState(){
    return {
      isModalOpen: false
    };
  },
  openModal(){
    this.setState({isModalOpen: true});
  },
  closeModal(){
    this.setState({isModalOpen: false});
  }
};
