import reducer from "./reducers";
import { createStore } from "redux";
import "./index.css";
import { ADD_MESSAGE, ADD_DATA, addMessage } from "./actions";
import { addData } from "./actions"
import data from "./data/data.json";
import dialog from './data/dialog.json';

const configureStore = () => {
  const defaultState = {
    roles: {
      admin: {
        role: "Admin",
        name: "Мария"
      },
      user: {
        role: "User",
        name: "Кирилл"
      }
    }
  };

  const store = createStore(reducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  const addUserBot = (store) => {
    const rawDispatch = store.dispatch;
    const userMessage = { ...store.getState().roles.user };
    const sendUserMessage = (content, time = 1000) => {
      setTimeout(() => {
        rawDispatch(addMessage({ ...userMessage, content: content }))
      }, time)
    };
    const checkIncluding = (content, strings) => {
      const message = content.toLowerCase();
      return strings.reduce((acc, str) => acc || message.includes(str), false)
    };
    let answerIds = [];
    let notAnswer = 0;
    let stopDialog = false;
    let timers = [];
    const getAnswer = (content) => {
      timers.map(e => clearTimeout(e));
      timers = [];
      let answer = "К сожалению я не понял, что вы сказали. Чтобы общаться со мной прочтите README.md";
      if (content instanceof Object) {
        if (answerIds.includes(0)) {
          answer = dialog[0].bad;
        }
        else {
          answer = dialog[0].good;
          answerIds.push(0);
        }
      }
      else if (checkIncluding(content, dialog[1].triggers)) {
        if (answerIds.includes(1)) {
          answer = dialog[1].bad;
        }
        else {
          answer = dialog[1].good;
          answerIds.push(1);
        }
      }
      else if (checkIncluding(content, dialog[2].triggers)) {
        if (answerIds.includes(2)) {
          answer = dialog[2].bad;
        }
        else {
          answer = dialog[2].good;
          answerIds.push(2);
        }
      }
      else if (checkIncluding(content, dialog[3].triggers)) {
        if (answerIds.includes(3)) {
          answer = dialog[3].bad;
        }
        else {
          answer = dialog[3].good;
          answerIds.push(3);
        }
      }
      else if (checkIncluding(content, dialog[4].triggers)) {
        if (answerIds.includes(4)) {
          answer = dialog[4].bad;
        }
        else {
          answer = dialog[4].good;
          answerIds.push(4);
        }
      }
      else if (checkIncluding(content, dialog[5].triggers)) {
        if (answerIds.includes(5)) {
          answer = dialog[5].bad;
          stopDialog = true;
        }
        else {
          answer = dialog[5].good;
          answerIds.push(5);
        }
      }
      else if (checkIncluding(content, dialog[6].triggers)) {
        if (answerIds.includes(6)) {
          answer = dialog[6].bad;
          stopDialog = true;
        }
        else {
          answer = dialog[6].good;
          answerIds.push(6);
        }
      }

      timers.push(
        setTimeout(() => {
          sendUserMessage("Ауууу!", 0);
          notAnswer++
        }, 20000),
        setTimeout(() => {
          sendUserMessage("Никому я не нужен((", 0);
          notAnswer+=2
        }, 40000),
        setTimeout(() => {
          sendUserMessage("Ну и пожалуйста... \n Ну и не нужно", 0);
          notAnswer+=3
        }, 60000)
      );
      return sendUserMessage(answer);
    };

    return (action) => {
      const { type, role, content } = action;
      if (type === ADD_DATA) {
        sendUserMessage("Привет!", 2000);
      }
      if (type === ADD_MESSAGE && role === "Admin") {
        if (!stopDialog && notAnswer < 10) {
          getAnswer(content);
        } else {
          sendUserMessage("Пользователь не активен.");
        }
      }
      return rawDispatch(action);
    }
  };
  store.dispatch = addUserBot(store);

  store.dispatch(addData(data));

  return store;
};

export default configureStore;