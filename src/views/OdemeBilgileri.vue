<template>
    <div class="container">
        <h2>Ödeme Bilgileri</h2>
        <p><b>Toplam:</b>{{toplam_tutar}} TL</p>
         <form method="post" action="#" @submit.prevent="odeme_yap">
                <div class="row">
                    <div class="col-2">
                        <label class="mr-2" for="kk_no">Kart No</label>
                        <input type="text" class="form-control" name="kk_no" id="kk_no">
                    </div>
                    <div class="col-2">
                        <label class="mr-2" for="kk_adsoyad">Ad Soyad</label>
                        <input type="text" class="form-control" name="kk_adsoyad" id="kk_adsoyad">
                    </div>
                    <div class="col-2">
                        <label class="mr-2" for="kk_ccv">CCV</label>
                        <input type="text" class="form-control" name="kk_ccv" id="kk_ccv">
                    </div>
                    <div class="col-3">
                        <label class="mr-2" for="kk_skt_ay">Son Kullanma Tarihi (Ay)</label>
                        <input type="text" class="form-control" name="kk_skt_ay" id="kk_skt_ay">
                    </div>
                    <div class="col-3">
                        <label class="mr-2" for="kk_skt_yil">Son Kullanma Tarihi (Yıl)</label>
                        <input type="text" class="form-control" name="kk_skt_yil" id="kk_skt_yil">
                    </div>
                </div>
                                    <button class="btn btn-success mt-2 float-right">Ödeme Yap</button>

        </form>
        </div>
</template>

<script>
import {GlobalData} from '../main'
export default {
    data(){
        return{
            secilen_sefer:{},
            secilen_koltuklar:[]
        }
    },
    created(){
        if(GlobalData.secilen_sefer == null)
            this.$router.push({name:'seferara'});

        this.secilen_sefer = GlobalData.secilen_sefer;
        this.secilen_koltuklar = GlobalData.secilen_koltuklar;

    },
    computed:{
        toplam_tutar(){
            return this.secilen_sefer.bilet_fiyati * this.secilen_koltuklar.length;
        }
    },
    methods:{
        odeme_yap(){
            alert('Ödemeniz alındı.');
            GlobalData.secilen_sefer = null;
            GlobalData.secilen_koltuklar = null;
            this.$router.push({name:'seferara'});
        }
    }
}
</script>
