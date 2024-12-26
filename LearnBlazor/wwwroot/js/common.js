// (1) Toastr Notification
window.showToastr = function (type, message) {
    if (type === "success") {
        toastr.success(message, { timeOut: 1000 });
    }
    if (type === "error") {
        toastr.error(message, { timeOut: 1000 });
    }
}

// (2) Sweet Alert Notification
window.sweetalert2 = function (type, message) {
    Swal.fire({
        title: "Sweet Alert Notfication",
        text: message,
        icon: type
    });
}