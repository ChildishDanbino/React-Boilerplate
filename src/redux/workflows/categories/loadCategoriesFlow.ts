import { call, put } from 'redux-saga/effects';
import axios from 'axios'
import { types as typesCategories } from 'redux/modules/categories';

export default function* () {
    try {
        yield put({ type: typesCategories.LOAD });
        const { status, data } = yield call(axios.get, 'http://www.mocky.io/v2/5c8120473100002613771da3?mocky-delay=1.5s');

        if (status === 200) {
            yield put({ type: typesCategories.LOAD_SUCCESS, payload: { categories: data } });
        } else {
            yield put({ type: typesCategories.LOAD_FAIL });
        }
    } catch (e) {
        console.log('ERROR', e)
    }
}
