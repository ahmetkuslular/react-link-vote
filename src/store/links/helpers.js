import { message } from '../../utils';

function sortLinks(state, action) {
  const data = [...state.data];
  const orderBy = action.params;

  data.sort((a, b) => {
    if (orderBy === 'lastAdded') {
      return b.id - a.id;
    } else if (orderBy === 'lessVoted') {
      return a.points - b.points;
    } else {
      return b.points - a.points;
    }
  });

  return { ...state, orderBy, data };
}

function addLink(state, action) {
  const data = [action.params, ...state.data];

  message(`<b>${action.params.name}</b> Eklendi`);
  return { ...state, data };
}

function voteLink(state, action) {
  const data = [...state.data];
  const link = action.params.link;
  const voteType = action.params.voteType;
  data.find(item => {
    if (item.id === link.id) {
      if (voteType === 'up') item.points++;
      else if (item.points > 0) {
        item.points--;
      }
      return true;
    }
  });

  return { ...state, data };
}

function deleteLink(state, action) {
  const temp = [...state.data];
  const link = action.params;
  const data = temp.filter(item => {
    return item.id !== link.id;
  });

  message(`<b>${link.name}</b> Silindi`);
  return { ...state, data };
}


export {
    addLink,
    sortLinks,
    deleteLink,
    voteLink
}