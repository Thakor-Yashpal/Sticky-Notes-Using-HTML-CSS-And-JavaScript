
$(Document).Ready(Function () {
    All_notes = $("Li A");
    All_notes.On("Keyup", Function () {
    Note_title = $(This).Find("H2").Text();
    Note_content = $(This).Find("P").Text();
    Item_key = "List_" + $(This).Parent().Index();
    Data = {
    Title: Note_title,
    Content: Note_content
    };
    Window.LocalStorage.SetItem(Item_key, JSON.Stringify(Data));
    });
    All_notes.Each(Function (Index) {
    Data = JSON.Parse(Window.LocalStorage.GetItem("List_" + Index));
    If (Data !== Null) {
    Note_title = Data.Title;
    Note_content = Data.Content;
    $(This).Find("H2").Text(Note_title);
    $(This).Find("P").Text(Note_content);
    }
    });
    });