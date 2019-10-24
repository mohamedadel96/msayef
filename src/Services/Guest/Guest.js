import Api from '../Api'

export default {
    FLATSEARCH(payload) {
        return Api().get(`/properties_search?language=${payload.lang}&page=${payload.page}&per_page=${payload.per_page}&city_id=${payload.city_id}&start_in=${payload.start_in}&end_in=${payload.end_in}&guest=${payload.guest}`)
    },
    GETPROPERTIES(payload) {
        return Api().get(`/properties/${payload.id}?language=${payload.lang}`)
    },
    GETAVAILABLEDATE(id) {
        return Api().get(`/property/calendar/show?property_id=${id}`)
    },
    REQUESTTOBOOK(payload) {
        return Api().post(`/properties/${payload.id}/calculate_price`, payload.data)
    },
    RESERVATION(payload) {
        return Api().post(`/properties/${payload.id}/reservation`, payload.data)
    },
    CHECKPROMOCODE(payload) {
        return Api().post(`/properties/${payload.id}/promo_code`, payload.data)
    },
    FEATURED_CITY(lang) {
        return Api().get(`/property/featured_city?language=${lang}`)
    },
    ARTICLES(payload) {
        return Api().get(`/articles?language=${payload.lang}&page=${payload.page}&per_page=${payload.per_page}&city_id=${payload.city_id}&start_in=${payload.start_in}&end_in=${payload.end_in}`)
    },
    ARTICLEWITHSLUG(req) {
        return Api().get(`/article?slug=${req.slug}&language=${req.lang}`)
    }
}