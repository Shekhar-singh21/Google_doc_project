
import { createSlice } from '@reduxjs/toolkit';


const toolkitListSlice = createSlice({
    name: 'toolkitList',
    initialState: {
        counter: 0,
        textAreaValue: '',
        isBold: false,
        isItalic: false,
        undoStack: [],
        redoStack: [],
        textAreaSize:'100%',
        fontColor:false,
        file: null,
        textUnderLine: false,
        isTextAlign : false,

    },

    reducers: {
        setCounter: (state, action) => {
            state.counter = action.payload
        },
        setTextAreaValue: (state, action) => {
            state.textAreaValue = action.payload
        },
        setFontSize: (state, action) => {
            state.fontSize = action.payload
        },
        printTextArea: (state) => {
            const printContent = state.textAreaValue;
            const printWindow = window.open('', '_blank');
            printWindow.document.open();
            printWindow.document.write(`
              <html>
                <head>
                  <title>Print</title>
                </head>
                <body>
                  <pre>${printContent}</pre>
                </body>
              </html>
            `);
            printWindow.document.close();
            printWindow.print();
        },
        toggleBold: (state) => {
            state.isBold = !state.isBold
        },
        toggleItalic: (state) => {
            state.isItalic = !state.isItalic
        },
        toggleUndoStack: (state) => {
          if (state.undoStack.length > 0) {
              const lastAction = state.undoStack.pop();
              state.redoStack.push(state.textAreaValue);
              state.textAreaValue = lastAction;
          }
      },
      toggleRedoStack: (state) => {
          if (state.redoStack.length > 0) {
              const nextAction = state.redoStack.pop();
              state.undoStack.push(state.textAreaValue);
              state.textAreaValue = nextAction;
          }
      },
      toggletextAreaSize:(state,action)=>{
        state.textAreaSize = action.payload
      },
      setFontColor:(state,action)=>{
        state.fontColor = action.payload
      },
      fileUpload:(state,action)=>{
        state.file= action.payload
      },
      SetTextUnderLine:(state)=>{
        state.textUnderLine = !state.textUnderLine
      },
      setIsTextAlign:(state)=>{
        state.isTextAlign = !state.isTextAlign
      }
    }
},

)

export const { setCounter, setTextAreaValue, setFontSize, setPrintOut, printTextArea, toggleBold, toggleItalic, toggleRedoStack, toggleUndoStack, toggletextAreaSize ,setFontColor,fileUpload,SetTextUnderLine,setIsTextAlign} = toolkitListSlice.actions;
export default toolkitListSlice.reducer;