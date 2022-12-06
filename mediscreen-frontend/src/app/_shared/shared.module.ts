import {CommonModule, HashLocationStrategy, LocationStrategy} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccordionModule} from "primeng/accordion";
import {AutoCompleteModule} from "primeng/autocomplete";
import {AvatarModule} from "primeng/avatar";
import {AvatarGroupModule} from "primeng/avatargroup";
import {BadgeModule} from "primeng/badge";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {CardModule} from "primeng/card";
import {CarouselModule} from "primeng/carousel";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {ChartModule} from "primeng/chart";
import {CheckboxModule} from "primeng/checkbox";
import {ChipModule} from "primeng/chip";
import {ChipsModule} from "primeng/chips";
import {CodeHighlighterModule} from "primeng/codehighlighter";
import {ColorPickerModule} from "primeng/colorpicker";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ContextMenuModule} from "primeng/contextmenu";
import {DataViewModule} from "primeng/dataview";
import {DialogModule} from "primeng/dialog";
import {DividerModule} from "primeng/divider";
import {DropdownModule} from "primeng/dropdown";
import {FieldsetModule} from "primeng/fieldset";
import {FileUploadModule} from "primeng/fileupload";
import {GalleriaModule} from "primeng/galleria";
import {ImageModule} from "primeng/image";
import {InplaceModule} from "primeng/inplace";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {KnobModule} from "primeng/knob";
import {LightboxModule} from "primeng/lightbox";
import {ListboxModule} from "primeng/listbox";
import {MegaMenuModule} from "primeng/megamenu";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {MultiSelectModule} from "primeng/multiselect";
import {OrderListModule} from "primeng/orderlist";
import {OrganizationChartModule} from "primeng/organizationchart";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {PaginatorModule} from "primeng/paginator";
import {PanelModule} from "primeng/panel";
import {PanelMenuModule} from "primeng/panelmenu";
import {PasswordModule} from "primeng/password";
import {PickListModule} from "primeng/picklist";
import {ProgressBarModule} from "primeng/progressbar";
import {RadioButtonModule} from "primeng/radiobutton";
import {RatingModule} from "primeng/rating";
import {RippleModule} from "primeng/ripple";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {ScrollTopModule} from "primeng/scrolltop";
import {SelectButtonModule} from "primeng/selectbutton";
import {SidebarModule} from "primeng/sidebar";
import {SkeletonModule} from "primeng/skeleton";
import {SlideMenuModule} from "primeng/slidemenu";
import {SliderModule} from "primeng/slider";
import {SplitButtonModule} from "primeng/splitbutton";
import {SplitterModule} from "primeng/splitter";
import {StepsModule} from "primeng/steps";
import {StyleClassModule} from "primeng/styleclass";
import {TableModule} from "primeng/table";
import {TabMenuModule} from "primeng/tabmenu";
import {TabViewModule} from "primeng/tabview";
import {TagModule} from "primeng/tag";
import {TerminalModule} from "primeng/terminal";
import {TieredMenuModule} from "primeng/tieredmenu";
import {TimelineModule} from "primeng/timeline";
import {ToastModule} from "primeng/toast";
import {ToggleButtonModule} from "primeng/togglebutton";
import {ToolbarModule} from "primeng/toolbar";
import {TooltipModule} from "primeng/tooltip";
import {TreeModule} from "primeng/tree";
import {TreeSelectModule} from "primeng/treeselect";
import {TreeTableModule} from "primeng/treetable";
import {VirtualScrollerModule} from "primeng/virtualscroller";
import {AppComponent} from "src/app/app.component";
import {AccessComponent} from "./primeng/components/access/access.component";
import {AppCodeModule} from "./primeng/components/app-code/app.code.component";
import {BlocksComponent} from "./primeng/components/blocks/blocks.component";
import {BlockViewer} from "./primeng/components/blockviewer/blockviewer.component";
import {ButtonComponent} from "./primeng/components/button/button.component";
import {ChartsComponent} from "./primeng/components/charts/charts.component";
import {CrudComponent} from "./primeng/components/crud/crud.component";
import {DashboardComponent} from "./primeng/components/dashboard/dashboard.component";
import {DocumentationComponent} from "./primeng/components/documentation/documentation.component";
import {EmptyComponent} from "./primeng/components/empty/empty.component";
import {ErrorComponent} from "./primeng/components/error/error.component";
import {FileComponent} from "./primeng/components/file/file.component";
import {FloatLabelComponent} from "./primeng/components/floatlabel/floatlabel.component";
import {FormLayoutComponent} from "./primeng/components/formlayout/formlayout.component";
import {IconsComponent} from "./primeng/components/icons/icons.component";
import {InputComponent} from "./primeng/components/input/input.component";
import {InvalidStateComponent} from "./primeng/components/invalidstate/invalidstate.component";
import {LandingComponent} from "./primeng/components/landing/landing.component";
import {ListComponent} from "./primeng/components/list/list.component";
import {LoginComponent} from "./primeng/components/login/login.component";
import {MediaComponent} from "./primeng/components/media/media.component";
import {ConfirmationComponent} from "./primeng/components/menus/confirmation.component";
import {MenusComponent} from "./primeng/components/menus/menus.component";
import {PaymentComponent} from "./primeng/components/menus/payment.component";
import {PersonalComponent} from "./primeng/components/menus/personal.component";
import {SeatComponent} from "./primeng/components/menus/seat.component";
import {MessagesComponent} from "./primeng/components/messages/messages.component";
import {MiscComponent} from "./primeng/components/misc/misc.component";
import {NotfoundComponent} from "./primeng/components/notfound/notfound.component";
import {OverlaysComponent} from "./primeng/components/overlays/overlays.component";
import {PanelsComponent} from "./primeng/components/panels/panels.component";
import {TableComponent} from "./primeng/components/table/table.component";
import {TimelineComponent} from "./primeng/components/timeline/timeline.component";
import {TreeComponent} from "./primeng/components/tree/tree.component";
import {ConfigService} from "./primeng/service/app.config.service";
import {MenuService} from "./primeng/service/app.menu.service";
import {CountryService} from "./primeng/service/countryservice";
import {CustomerService} from "./primeng/service/customerservice";
import {EventService} from "./primeng/service/eventservice";
import {IconService} from "./primeng/service/iconservice";
import {NodeService} from "./primeng/service/nodeservice";
import {PhotoService} from "./primeng/service/photoservice";
import {ProductService} from "./primeng/service/productservice";
import {FeatherModule} from "angular-feather";
import * as icons from "angular-feather/icons";
import {LayoutModule} from "./layout/layout.module";
import {MatPaginatorModule} from '@angular/material/paginator';
import {QuillModule} from 'ngx-quill';


@NgModule({
    imports: [
        FeatherModule.pick(icons.allIcons),
        QuillModule.forRoot({
            modules: {
                syntax: false,
                toolbar: [['bold', 'italic', 'underline']]
              }
        }),
        MatPaginatorModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        AvatarModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        GalleriaModule,
        ImageModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TagModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        TimelineModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeSelectModule,
        TreeTableModule,
        VirtualScrollerModule,
        AppCodeModule,
        StyleClassModule,
        ChipModule,
        ChipsModule,
        CommonModule
    ],
    declarations: [
        DashboardComponent,
        FormLayoutComponent,
        FloatLabelComponent,
        InvalidStateComponent,
        InputComponent,
        ButtonComponent,
        TableComponent,
        ListComponent,
        TreeComponent,
        PanelsComponent,
        OverlaysComponent,
        MenusComponent,
        MessagesComponent,
        MessagesComponent,
        MiscComponent,
        ChartsComponent,
        EmptyComponent,
        FileComponent,
        IconsComponent,
        NotfoundComponent,
        DocumentationComponent,
        CrudComponent,
        TimelineComponent,
        BlocksComponent,
        BlockViewer,
        MediaComponent,
        PaymentComponent,
        ConfirmationComponent,
        PersonalComponent,
        SeatComponent,
        LandingComponent,
        LoginComponent,
        ErrorComponent,
        NotfoundComponent,
        AccessComponent
    ],
    exports: [
        FeatherModule,
        MatPaginatorModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        HttpClientModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        AvatarModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        GalleriaModule,
        ImageModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TagModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        TimelineModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeSelectModule,
        TreeTableModule,
        VirtualScrollerModule,
        AppCodeModule,
        StyleClassModule,
        ChipModule,
        ChipsModule,
        CommonModule,
        QuillModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService, ConfigService
    ],
    bootstrap: [AppComponent]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
          ngModule: SharedModule
        };
      }
 }
