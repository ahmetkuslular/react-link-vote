import { message } from '../../utils';

function fetchLinks(state, action) {
  return { ...state };
}

function sortLinks(state, action) {
  const data = [...state.data];
  let orderBy = action && action.params;
  if (!orderBy) {
    orderBy = state.orderBy;
  }
  data.sort((a, b) => {
    if (orderBy === 'mostVoted') {
      return b.points - a.points;
    } else if (orderBy === 'lessVoted') {
      return a.points - b.points;
    } else {
      return b.id - a.id;
    }
  });

  return { ...state, orderBy, data };
}

function changePage(state, action) {
  const currentPage = action.params;

  return { ...state, currentPage };
}

function addLink(state, action) {
  const data = [action.params, ...state.data];

  message(`<b>${action.params.name}</b> Eklendi`);
  return sortLinks({ ...state, data, totalItems: data.length });
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
  return sortLinks({ ...state, data });
}

function deleteLink(state, action) {
  const temp = [...state.data];
  const link = action.params;
  const data = temp.filter(item => {
    return item.id !== link.id;
  });

  message(`<b>${link.name}</b> Silindi`);
  return { ...state, data, totalItems: data.length };
}

export { addLink, sortLinks, deleteLink, voteLink, changePage, fetchLinks };
