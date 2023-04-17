import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SiteSettingDTO, SiteSetting } from './site-settings-DTO';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class SiteSettingsService {
  private settings:BehaviorSubject<SiteSettingDTO>=new BehaviorSubject<SiteSettingDTO>(null);

  constructor(
    private http : HttpClient
    ) {}
    
    public getSiteSetting():Observable<SiteSetting>{
    return this.http.get<SiteSetting>('/site-setting/')
    }
    public getCurrentSetting():Observable<SiteSettingDTO>{
      return this.settings;
    }
    public setCurrentSetting(settings:SiteSettingDTO){
      this.settings.next(settings);
    }
    
    }
