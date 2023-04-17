
export class SiteSettingDTO{
    constructor(
        id:number,
        logo_image: string,
        title_en: string,
        title_fa: string,
        address: string,
        phone: string,
        fax: string,
        email: string,
        copy_right: string
        ){}

}

export interface SiteSetting{
data : SiteSettingDTO
}

