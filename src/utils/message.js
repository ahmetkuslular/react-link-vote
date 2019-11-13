import toastr from 'toastr';

const showMessage = (message, type) => {
  toastr.options = {
    positionClass: 'toast-top-full-width',
    hideDuration: 300,
    timeOut: 3000,
    closeButton: true,
    showEasing: 'swing',
    hideEasing: 'linear',
    showMethod: 'fadeIn',
    hideMethod: 'fadeOut',
  };
  toastr.clear();
  console.log('type',type);
  if (type === 'error') {
    setTimeout(() => toastr.error(message), 300);
  } else {
    setTimeout(() => toastr.success(message), 300);
  }
};

export default showMessage;
