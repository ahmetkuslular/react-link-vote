import toastr from 'toastr';

const showMessage = (message) => {
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
  setTimeout(() => toastr.success(message), 300);
};

export default showMessage;