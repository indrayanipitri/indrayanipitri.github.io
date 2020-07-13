import React, {Component} from 'react';
import {hotProduct, kemejaWanita, blouseWanita, bajuTanpaLengan, Tshirt,
    celanaPanjang, Blazer, Cardigan, Hoodie, Jacket, celanaPendek, Rok,
    dressPanjang, dressPendek, Pashmina, segiEmpat, detailProduct} from './data';
import {Gallery} from './data';
import {Designer} from './data';
const ProductContext = React.createContext();
//Provider
//Consumer 
 
class ProductProvider extends Component {
    state = {
        hotProducts: [],
        kemejaWanitas: [],
        blouseWanitas: [],
        bajutanpalengans:[],
        Tshirts: [],
        Blazers: [],
        Cardigans: [],
        Hoodies: [],
        Jackets: [],
        celanaPendeks: [],
        celanaPanjangs: [],
        Roks: [],
        dressPanjangs: [],
        dressPendeks: [],
        Pashminas: [],
        SegiEmpats:[],
        detailProduct: detailProduct,
        Gallerys: Gallery,
        Designers: Designer
    };

    componentDidMount() {
        this.setProducts();
    };

    setProducts = () => {
        let tempHotProducts = [];
        hotProduct.forEach(item => {
            const singleItem = {...item};
            tempHotProducts = [...tempHotProducts, singleItem];
        });
        this.setState(() => {
            return { hotProducts: tempHotProducts};
        });

        let tempKemejaW = [];
        kemejaWanita.forEach(item => {
            const singleItems = {...item};
            tempKemejaW = [...tempKemejaW, singleItems];
        });
        this.setState(() => {
            return { kemejaWanitas: tempKemejaW};
        });

        let tempBlouse = [];
        blouseWanita.forEach(item => {
            const singleItems = {...item};
            tempBlouse = [...tempBlouse, singleItems];
        });
        this.setState(() => {
            return { blouseWanitas: tempBlouse};
        });

        let tempBajuTanpaLengan = [];
        bajuTanpaLengan.forEach(item => {
            const singleItems = {...item};
            tempBajuTanpaLengan = [...tempBajuTanpaLengan, singleItems];
        });
        this.setState(() => {
            return { bajutanpalengans: tempBajuTanpaLengan};
        });

        let tempTshirt = [];
        Tshirt.forEach(item => {
            const singleItems = {...item};
            tempTshirt = [...tempTshirt, singleItems];
        });
        this.setState(() => {
            return { Tshirts: tempTshirt};
        });

        let tempCelanaPanjang = [];
        celanaPanjang.forEach(item => {
            const singleItems = {...item};
            tempCelanaPanjang = [...tempCelanaPanjang, singleItems];
        });
        this.setState(() => {
            return { celanaPanjangs: tempCelanaPanjang};
        });

        let tempBlazer = [];
        Blazer.forEach(item => {
            const singleItems = {...item};
            tempBlazer = [...tempBlazer, singleItems];
        });
        this.setState(() => {
            return { Blazers: tempBlazer};
        });

        let tempCardigan = [];
        Cardigan.forEach(item => {
            const singleItems = {...item};
            tempCardigan = [...tempCardigan, singleItems];
        });
        this.setState(() => {
            return { Cardigans: tempCardigan};
        });

        let tempHoodie = [];
        Hoodie.forEach(item => {
            const singleItems = {...item};
            tempHoodie = [...tempHoodie, singleItems];
        });
        this.setState(() => {
            return { Hoodies: tempHoodie};
        });

        let tempJacket = [];
        Jacket.forEach(item => {
            const singleItems = {...item};
            tempJacket = [...tempJacket, singleItems];
        });
        this.setState(() => {
            return { Jackets: tempJacket};
        });

        
        let tempCelanaPendek = [];
        celanaPendek.forEach(item => {
            const singleItems = {...item};
            tempCelanaPendek = [...tempCelanaPendek, singleItems];
        });
        this.setState(() => {
            return { celanaPendeks: tempCelanaPendek};
        });

        let tempRok = [];
        Rok.forEach(item => {
            const singleItems = {...item};
            tempRok = [...tempRok, singleItems];
        });
        this.setState(() => {
            return { Roks: tempRok};
        });

        let tempDressPanjang = [];
        dressPanjang.forEach(item => {
            const singleItems = {...item};
            tempDressPanjang = [...tempDressPanjang, singleItems];
        });
        this.setState(() => {
            return { dressPanjangs: tempDressPanjang};
        });

        let tempDressPendek = [];
        dressPendek.forEach(item => {
            const singleItems = {...item};
            tempDressPendek = [...tempDressPendek, singleItems];
        });
        this.setState(() => {
            return { dressPendeks: tempDressPendek};
        });

        let tempPashmina = [];
        Pashmina.forEach(item => {
            const singleItems = {...item};
            tempPashmina = [...tempPashmina, singleItems];
        });
        this.setState(() => {
            return { Pashminas: tempPashmina};
        });

        let tempSegiEmpat = [];
        segiEmpat.forEach(item => {
            const singleItems = {...item};
            tempSegiEmpat = [...tempSegiEmpat, singleItems];
        });
        this.setState(() => {
            return { SegiEmpats: tempSegiEmpat};
        });
    };
    
    getItemHotProduct = id => {
        const hotProducts= this.state.hotProducts.find(item =>
            item.id === id);
        return hotProducts;
    };

    getItemKemejaW = id => {
        const kemejaWanitas= this.state.kemejaWanitas.find(item =>
            item.id === id);
        return kemejaWanitas;
    };

    getItemBlouse = id => {
        const blouseWanitas= this.state.blouseWanitas.find(item =>
            item.id === id);
        return blouseWanitas;
    };

    getItemBajuTanpaLengan = id => {
        const bajutanpalengans= this.state.bajutanpalengans.find(item =>
            item.id === id);
        return bajutanpalengans;
    };

    getItemTshirt = id => {
        const Tshirts= this.state.Tshirts.find(item =>
            item.id === id);
        return Tshirts;
    };

    getItemCelanaPanjang = id => {
        const celanaPanjangs= this.state.celanaPanjangs.find(item =>
            item.id === id);
        return celanaPanjangs;
    };

    getItemBlazer = id => {
        const Blazers= this.state.Blazers.find(item =>
            item.id === id);
        return Blazers;
    };

    getItemCardigan = id => {
        const Cardigans= this.state.Cardigans.find(item =>
            item.id === id);
        return Cardigans;
    };

    getItemHoodie = id => {
        const Hoodies= this.state.Hoodies.find(item =>
            item.id === id);
        return Hoodies;
    };

    getItemJacket = id => {
        const Jackets= this.state.Jackets.find(item =>
            item.id === id);
        return Jackets;
    };

    getItemCelanaPendek = id => {
        const celanaPendeks= this.state.celanaPendeks.find(item =>
            item.id === id);
        return celanaPendeks;
    };

    getItemRok = id => {
        const Roks= this.state.Roks.find(item =>
            item.id === id);
        return Roks;
    };

    getItemDressPanjang = id => {
        const dressPanjangs= this.state.dressPanjangs.find(item =>
            item.id === id);
        return dressPanjangs;
    };

    getItemDressPendek = id => {
        const dressPendeks= this.state.dressPendeks.find(item =>
            item.id === id);
        return dressPendeks;
    };

    getItemPashmina = id => {
        const Pashminas= this.state.Pashminas.find(item =>
            item.id === id);
        return Pashminas;
    };

    getItemSegiEmpat = id => {
        const SegiEmpats= this.state.SegiEmpats.find(item =>
            item.id === id);
        return SegiEmpats;
    };


    handleDetailHotProduct = (id) => {
        const hotproduct = this.getItemHotProduct(id);
        this.setState(() => {
            return {detailProduct: hotproduct}
        });

    };

    handleDetailKemejaW = (id) => {
        const kemejawanita = this.getItemKemejaW(id);
        this.setState(() => {
            return {detailProduct: kemejawanita}
        });

    };

    handleDetailBlouse = (id) => {
        const blouse = this.getItemBlouse(id);
        this.setState(() => {
            return {detailProduct: blouse}
        });
    };

    handleDetailBajuTanpaLengan = (id) => {
        const bajutanpalengan = this.getItemBajuTanpaLengan(id);
        this.setState(() => {
            return {detailProduct: bajutanpalengan}
        });
    };

    handleDetailTshirt = (id) => {
        const tshirt = this.getItemTshirt(id);
        this.setState(() => {
            return {detailProduct: tshirt}
        });
    };

    handleDetailCelanaPanjang = (id) => {
        const celanapanjang = this.getItemCelanaPanjang(id);
        this.setState(() => {
            return {detailProduct: celanapanjang}
        });
    };

    handleDetailBlazer = (id) => {
        const blazer = this.getItemBlazer(id);
        this.setState(() => {
            return {detailProduct: blazer}
        });
    };

    handleDetailCardigan = (id) => {
        const cardigan = this.getItemCardigan(id);
        this.setState(() => {
            return {detailProduct: cardigan}
        });
    };

    handleDetailHoodie = (id) => {
        const hoodie = this.getItemHoodie(id);
        this.setState(() => {
            return {detailProduct: hoodie}
        });
    };

    handleDetailJacket = (id) => {
        const jacket = this.getItemJacket(id);
        this.setState(() => {
            return {detailProduct: jacket}
        });
    };

    handleDetailCelanaPendek = (id) => {
        const celanapendek = this.getItemCelanaPendek(id);
        this.setState(() => {
            return {detailProduct: celanapendek}
        });
    };

    handleDetailRok = (id) => {
        const rok = this.getItemRok(id);
        this.setState(() => {
            return {detailProduct: rok}
        });

    };

    handleDetailDressPanjang = (id) => {
        const dresspanjang = this.getItemDressPanjang(id);
        this.setState(() => {
            return {detailProduct: dresspanjang}
        });

    };

    handleDetailDressPendek = (id) => {
        const dresspendek = this.getItemDressPendek(id);
        this.setState(() => {
            return {detailProduct: dresspendek}
        });

    };

    handleDetailPashmina = (id) => {
        const pashmina = this.getItemPashmina(id);
        this.setState(() => {
            return {detailProduct: pashmina}
        });

    };

    handleDetailSegiEmpat = (id) => {
        const segiempat = this.getItemSegiEmpat(id);
        this.setState(() => {
            return {detailProduct: segiempat}
        });

    };



    addToCart = () => {
        console.log ('hello from add to cart');
    };

    render() {
        return (
            <ProductContext.Provider
              value={{
                  ...this.state,
                  handleDetailHotProduct: this.handleDetailHotProduct,
                  handleDetailKemejaW: this.handleDetailKemejaW,
                  handleDetailBlouse: this.handleDetailBlouse,
                  handleDetailBajuTanpaLengan: this.handleDetailBajuTanpaLengan,
                  handleDetailTshirt: this.handleDetailTshirt,
                  handleDetailCelanaPanjang: this.handleDetailCelanaPanjang,
                  handleDetailBlazer: this.handleDetailBlazer,
                  handleDetailCardigan: this.handleDetailCardigan,
                  handleDetailHoodie: this.handleDetailHoodie,
                  handleDetailJacket: this.handleDetailJacket,
                  handleDetailCelanaPendek: this.handleDetailCelanaPendek,
                  handleDetailRok: this.handleDetailRok,
                  handleDetailDressPanjang: this.handleDetailDressPanjang,
                  handleDetailDressPendek: this.handleDetailDressPendek,
                  handleDetailPashmina: this.handleDetailPashmina,
                  handleDetailSegiEmpat: this.handleDetailSegiEmpat,
                  addToCart: this.addToCart
              }}>
                  {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};