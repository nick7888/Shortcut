import creators from '../data/creator'
export const state = () => ({
  creators
})
export const getters = {
  creators: state => state.creators,
  getCreatorById: (state) => (id) => {
    return state.creators.find(creator => creator.id === id)
  }
}
