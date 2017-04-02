"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var event_service_1 = require("./event.service");
var EventDetailComponent = (function () {
    function EventDetailComponent(_route, _router, _eventService) {
        this._route = _route;
        this._router = _router;
        this._eventService = _eventService;
        this.pageTitle = 'event detail';
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getEvent(id);
        });
    };
    EventDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EventDetailComponent.prototype.getEvent = function (id) {
        var _this = this;
        this._eventService.getEvent(id).subscribe(function (event) { return _this.event = event; }, function (error) { return _this.errorMessage = error; });
    };
    return EventDetailComponent;
}());
EventDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/events/event-detail.component.html',
        styleUrls: ['app/events/event-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        event_service_1.EventService])
], EventDetailComponent);
exports.EventDetailComponent = EventDetailComponent;
//# sourceMappingURL=event-detail.component.js.map