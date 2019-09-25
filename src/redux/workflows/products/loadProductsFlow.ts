import { call, put } from 'redux-saga/effects';
import axios from 'axios'
import { types as typesProducts } from 'redux/modules/products';

export default function* () {
    try {
        yield put({ type: typesProducts.LOAD });
        const { status, data } = yield call(axios.get, 'http://www.mocky.io/v2/5c811f3b310000c016771d9b?mocky-delay=1.5s');

        if (status === 200) {
            yield put({ type: typesProducts.LOAD_SUCCESS, payload: { products: data } });
        } else {
            yield put({ type: typesProducts.LOAD_FAIL });
        }
    } catch (e) {
        console.log('ERROR', e)
    }
}
