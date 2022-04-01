import {makeAutoObservable} from "mobx";

export default class CertificateStore {
    constructor(){
        this._category = []
        this._certificates = []
        this._selectedCategory = {}
        makeAutoObservable(this)
    }
    setCertificates(certificates){
        this._certificates = certificates
    }
    setCategory(category){
        this._category = category
    }
    setSelectedCategory(category){
        this._selectedCategory = category
    }
    get certificates(){
        return this._certificates
    }
    get category(){
        return this._category
    }
    get selectedCategory(){
        return this._selectedCategory
    }
}
