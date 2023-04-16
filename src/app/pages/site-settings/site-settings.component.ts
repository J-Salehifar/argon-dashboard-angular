import { Component, OnInit } from '@angular/core';
import { SiteSettingsService } from './site-settings.service';


@Component({
  selector: 'app-site-settings',
  templateUrl: './site-settings.component.html',
  styleUrls: ['./site-settings.component.scss']
})
export class SiteSettingsComponent implements OnInit {

  constructor(
    private siteSettingService : SiteSettingsService
  ) { }

  ngOnInit(): void {

  }

}