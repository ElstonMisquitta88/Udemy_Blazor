using Microsoft.JSInterop;

namespace LearnBlazor.Helper;

public static class IJSRuntimeExtensions
{
    public static async Task toastrSuccess(this IJSRuntime js, string message)
    {
        await js.InvokeVoidAsync("showToastr","success", message);
    }

    public static async Task toastrError(this IJSRuntime js, string message)
    {
        await js.InvokeVoidAsync("showToastr", "error", message);
    }
}
