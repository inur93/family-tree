//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.18.2.0 (NJsonSchema v10.8.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export class ApiClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance ? instance : axios.create();

        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";

    }

    /**
     * @param query (optional) 
     * @return Success
     */
    searchPeople(query: string | undefined , cancelToken?: CancelToken | undefined): Promise<BasicPersonDto[]> {
        let url_ = this.baseUrl + "/api/person?";
        if (query === null)
            throw new Error("The parameter 'query' cannot be null.");
        else if (query !== undefined)
            url_ += "query=" + encodeURIComponent("" + query) + "&";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processSearchPeople(_response);
        });
    }

    protected processSearchPeople(response: AxiosResponse): Promise<BasicPersonDto[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(BasicPersonDto.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return Promise.resolve<BasicPersonDto[]>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<BasicPersonDto[]>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    createPerson(body: CreatePersonDto | undefined , cancelToken?: CancelToken | undefined): Promise<PersonDto> {
        let url_ = this.baseUrl + "/api/person";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processCreatePerson(_response);
        });
    }

    protected processCreatePerson(response: AxiosResponse): Promise<PersonDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = PersonDto.fromJS(resultData200);
            return Promise.resolve<PersonDto>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<PersonDto>(null as any);
    }

    /**
     * @return Success
     */
    getPerson(id: string , cancelToken?: CancelToken | undefined): Promise<PersonDto> {
        let url_ = this.baseUrl + "/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetPerson(_response);
        });
    }

    protected processGetPerson(response: AxiosResponse): Promise<PersonDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = PersonDto.fromJS(resultData200);
            return Promise.resolve<PersonDto>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<PersonDto>(null as any);
    }

    /**
     * @return Success
     */
    getRelatedPeople(id: string , cancelToken?: CancelToken | undefined): Promise<BasicPersonDto[]> {
        let url_ = this.baseUrl + "/{id}/related";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetRelatedPeople(_response);
        });
    }

    protected processGetRelatedPeople(response: AxiosResponse): Promise<BasicPersonDto[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(BasicPersonDto.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return Promise.resolve<BasicPersonDto[]>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<BasicPersonDto[]>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    updatePerson(id: string, body: CreatePersonDto | undefined , cancelToken?: CancelToken | undefined): Promise<PersonDto> {
        let url_ = this.baseUrl + "/api/person/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "PUT",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUpdatePerson(_response);
        });
    }

    protected processUpdatePerson(response: AxiosResponse): Promise<PersonDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = PersonDto.fromJS(resultData200);
            return Promise.resolve<PersonDto>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<PersonDto>(null as any);
    }

    /**
     * @return Success
     */
    deletePerson(id: string , cancelToken?: CancelToken | undefined): Promise<void> {
        let url_ = this.baseUrl + "/api/person/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "DELETE",
            url: url_,
            headers: {
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processDeletePerson(_response);
        });
    }

    protected processDeletePerson(response: AxiosResponse): Promise<void> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve<void>(null as any);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<void>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    createRelationship(body: CreateRelationshipDto | undefined , cancelToken?: CancelToken | undefined): Promise<RelationshipDto> {
        let url_ = this.baseUrl + "/api/relationships";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processCreateRelationship(_response);
        });
    }

    protected processCreateRelationship(response: AxiosResponse): Promise<RelationshipDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = RelationshipDto.fromJS(resultData200);
            return Promise.resolve<RelationshipDto>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<RelationshipDto>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    updateRelationship(id: string, body: UpdateRelationshipDto | undefined , cancelToken?: CancelToken | undefined): Promise<RelationshipDto> {
        let url_ = this.baseUrl + "/api/relationships/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "PUT",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUpdateRelationship(_response);
        });
    }

    protected processUpdateRelationship(response: AxiosResponse): Promise<RelationshipDto> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = RelationshipDto.fromJS(resultData200);
            return Promise.resolve<RelationshipDto>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<RelationshipDto>(null as any);
    }

    /**
     * @return Success
     */
    deleteRelationship(id: string , cancelToken?: CancelToken | undefined): Promise<void> {
        let url_ = this.baseUrl + "/api/relationships/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "DELETE",
            url: url_,
            headers: {
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processDeleteRelationship(_response);
        });
    }

    protected processDeleteRelationship(response: AxiosResponse): Promise<void> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            return Promise.resolve<void>(null as any);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<void>(null as any);
    }
}

/** Person DTO used in lists and other related objects, to reduce amount of data */
export class BasicPersonDto implements IBasicPersonDto {
    id!: string;
    displayName!: string;
    birthday!: Date;
    sex!: SexDto;

    constructor(data?: IBasicPersonDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.displayName = _data["displayName"];
            this.birthday = _data["birthday"] ? new Date(_data["birthday"].toString()) : <any>undefined;
            this.sex = _data["sex"];
        }
    }

    static fromJS(data: any): BasicPersonDto {
        data = typeof data === 'object' ? data : {};
        let result = new BasicPersonDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["displayName"] = this.displayName;
        data["birthday"] = this.birthday ? this.birthday.toISOString() : <any>undefined;
        data["sex"] = this.sex;
        return data;
    }
}

/** Person DTO used in lists and other related objects, to reduce amount of data */
export interface IBasicPersonDto {
    id: string;
    displayName: string;
    birthday: Date;
    sex: SexDto;
}

export class CreatePersonDto implements ICreatePersonDto {
    firstname!: string;
    middlename?: string | undefined;
    lastname!: string;
    birthday!: Date;
    sex!: SexDto;

    constructor(data?: ICreatePersonDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.firstname = _data["firstname"];
            this.middlename = _data["middlename"];
            this.lastname = _data["lastname"];
            this.birthday = _data["birthday"] ? new Date(_data["birthday"].toString()) : <any>undefined;
            this.sex = _data["sex"];
        }
    }

    static fromJS(data: any): CreatePersonDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreatePersonDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["firstname"] = this.firstname;
        data["middlename"] = this.middlename;
        data["lastname"] = this.lastname;
        data["birthday"] = this.birthday ? this.birthday.toISOString() : <any>undefined;
        data["sex"] = this.sex;
        return data;
    }
}

export interface ICreatePersonDto {
    firstname: string;
    middlename?: string | undefined;
    lastname: string;
    birthday: Date;
    sex: SexDto;
}

export class CreateRelationshipDto implements ICreateRelationshipDto {
    personId!: string;
    is!: RelationshipTypeDto;
    ofId!: string;
    marriedOn?: Date | undefined;
    validFrom?: Date | undefined;
    validTo?: Date | undefined;

    constructor(data?: ICreateRelationshipDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.personId = _data["personId"];
            this.is = _data["is"];
            this.ofId = _data["ofId"];
            this.marriedOn = _data["marriedOn"] ? new Date(_data["marriedOn"].toString()) : <any>undefined;
            this.validFrom = _data["validFrom"] ? new Date(_data["validFrom"].toString()) : <any>undefined;
            this.validTo = _data["validTo"] ? new Date(_data["validTo"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): CreateRelationshipDto {
        data = typeof data === 'object' ? data : {};
        let result = new CreateRelationshipDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["personId"] = this.personId;
        data["is"] = this.is;
        data["ofId"] = this.ofId;
        data["marriedOn"] = this.marriedOn ? this.marriedOn.toISOString() : <any>undefined;
        data["validFrom"] = this.validFrom ? this.validFrom.toISOString() : <any>undefined;
        data["validTo"] = this.validTo ? this.validTo.toISOString() : <any>undefined;
        return data;
    }
}

export interface ICreateRelationshipDto {
    personId: string;
    is: RelationshipTypeDto;
    ofId: string;
    marriedOn?: Date | undefined;
    validFrom?: Date | undefined;
    validTo?: Date | undefined;
}

export class NameDto implements INameDto {
    id!: string;
    readonly displayName!: string;
    firstname!: string;
    middlename?: string | undefined;
    lastname!: string;
    from!: Date;
    to?: Date | undefined;

    constructor(data?: INameDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            (<any>this).displayName = _data["displayName"];
            this.firstname = _data["firstname"];
            this.middlename = _data["middlename"];
            this.lastname = _data["lastname"];
            this.from = _data["from"] ? new Date(_data["from"].toString()) : <any>undefined;
            this.to = _data["to"] ? new Date(_data["to"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): NameDto {
        data = typeof data === 'object' ? data : {};
        let result = new NameDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["displayName"] = this.displayName;
        data["firstname"] = this.firstname;
        data["middlename"] = this.middlename;
        data["lastname"] = this.lastname;
        data["from"] = this.from ? this.from.toISOString() : <any>undefined;
        data["to"] = this.to ? this.to.toISOString() : <any>undefined;
        return data;
    }
}

export interface INameDto {
    id: string;
    displayName: string;
    firstname: string;
    middlename?: string | undefined;
    lastname: string;
    from: Date;
    to?: Date | undefined;
}

/** Relationship used in the context of a specific person. where FamilyTree.Contracts.Relationship.PersonalRelationshipDto.Person is System.Type to the person in question e.g. "Bobby" is "Child" to "Sally" */
export class PersonalRelationshipDto implements IPersonalRelationshipDto {
    id!: string;
    is!: RelationshipTypeDto;
    person!: BasicPersonDto;
    marriedOn?: Date | undefined;
    validFrom?: Date | undefined;
    validTo?: Date | undefined;

    constructor(data?: IPersonalRelationshipDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.person = new BasicPersonDto();
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.is = _data["is"];
            this.person = _data["person"] ? BasicPersonDto.fromJS(_data["person"]) : new BasicPersonDto();
            this.marriedOn = _data["marriedOn"] ? new Date(_data["marriedOn"].toString()) : <any>undefined;
            this.validFrom = _data["validFrom"] ? new Date(_data["validFrom"].toString()) : <any>undefined;
            this.validTo = _data["validTo"] ? new Date(_data["validTo"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): PersonalRelationshipDto {
        data = typeof data === 'object' ? data : {};
        let result = new PersonalRelationshipDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["is"] = this.is;
        data["person"] = this.person ? this.person.toJSON() : <any>undefined;
        data["marriedOn"] = this.marriedOn ? this.marriedOn.toISOString() : <any>undefined;
        data["validFrom"] = this.validFrom ? this.validFrom.toISOString() : <any>undefined;
        data["validTo"] = this.validTo ? this.validTo.toISOString() : <any>undefined;
        return data;
    }
}

/** Relationship used in the context of a specific person. where FamilyTree.Contracts.Relationship.PersonalRelationshipDto.Person is System.Type to the person in question e.g. "Bobby" is "Child" to "Sally" */
export interface IPersonalRelationshipDto {
    id: string;
    is: RelationshipTypeDto;
    person: BasicPersonDto;
    marriedOn?: Date | undefined;
    validFrom?: Date | undefined;
    validTo?: Date | undefined;
}

export class PersonDto implements IPersonDto {
    id!: string;
    currentName!: NameDto;
    birthday!: Date;
    sex!: SexDto;
    relationships!: PersonalRelationshipDto[];
    readonly children!: PersonalRelationshipDto[];
    partner!: PersonalRelationshipDto;

    constructor(data?: IPersonDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.currentName = new NameDto();
            this.relationships = [];
            this.children = [];
            this.partner = new PersonalRelationshipDto();
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.currentName = _data["currentName"] ? NameDto.fromJS(_data["currentName"]) : new NameDto();
            this.birthday = _data["birthday"] ? new Date(_data["birthday"].toString()) : <any>undefined;
            this.sex = _data["sex"];
            if (Array.isArray(_data["relationships"])) {
                this.relationships = [] as any;
                for (let item of _data["relationships"])
                    this.relationships!.push(PersonalRelationshipDto.fromJS(item));
            }
            if (Array.isArray(_data["children"])) {
                (<any>this).children = [] as any;
                for (let item of _data["children"])
                    (<any>this).children!.push(PersonalRelationshipDto.fromJS(item));
            }
            this.partner = _data["partner"] ? PersonalRelationshipDto.fromJS(_data["partner"]) : new PersonalRelationshipDto();
        }
    }

    static fromJS(data: any): PersonDto {
        data = typeof data === 'object' ? data : {};
        let result = new PersonDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["currentName"] = this.currentName ? this.currentName.toJSON() : <any>undefined;
        data["birthday"] = this.birthday ? this.birthday.toISOString() : <any>undefined;
        data["sex"] = this.sex;
        if (Array.isArray(this.relationships)) {
            data["relationships"] = [];
            for (let item of this.relationships)
                data["relationships"].push(item.toJSON());
        }
        if (Array.isArray(this.children)) {
            data["children"] = [];
            for (let item of this.children)
                data["children"].push(item.toJSON());
        }
        data["partner"] = this.partner ? this.partner.toJSON() : <any>undefined;
        return data;
    }
}

export interface IPersonDto {
    id: string;
    currentName: NameDto;
    birthday: Date;
    sex: SexDto;
    relationships: PersonalRelationshipDto[];
    children: PersonalRelationshipDto[];
    partner: PersonalRelationshipDto;
}

/** Relationship where FamilyTree.Contracts.Relationship.RelationshipDto.PersonId is System.Type to !:RelatedId e.g. "Bobby" is "Child" to "Sally" */
export class RelationshipDto implements IRelationshipDto {
    id!: string;
    personId!: string;
    is!: RelationshipTypeDto;
    toId!: string;
    marriedOn?: Date | undefined;
    validFrom?: Date | undefined;
    validTo?: Date | undefined;

    constructor(data?: IRelationshipDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.personId = _data["personId"];
            this.is = _data["is"];
            this.toId = _data["toId"];
            this.marriedOn = _data["marriedOn"] ? new Date(_data["marriedOn"].toString()) : <any>undefined;
            this.validFrom = _data["validFrom"] ? new Date(_data["validFrom"].toString()) : <any>undefined;
            this.validTo = _data["validTo"] ? new Date(_data["validTo"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): RelationshipDto {
        data = typeof data === 'object' ? data : {};
        let result = new RelationshipDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["personId"] = this.personId;
        data["is"] = this.is;
        data["toId"] = this.toId;
        data["marriedOn"] = this.marriedOn ? this.marriedOn.toISOString() : <any>undefined;
        data["validFrom"] = this.validFrom ? this.validFrom.toISOString() : <any>undefined;
        data["validTo"] = this.validTo ? this.validTo.toISOString() : <any>undefined;
        return data;
    }
}

/** Relationship where FamilyTree.Contracts.Relationship.RelationshipDto.PersonId is System.Type to !:RelatedId e.g. "Bobby" is "Child" to "Sally" */
export interface IRelationshipDto {
    id: string;
    personId: string;
    is: RelationshipTypeDto;
    toId: string;
    marriedOn?: Date | undefined;
    validFrom?: Date | undefined;
    validTo?: Date | undefined;
}

export enum RelationshipTypeDto {
    Child = "Child",
    Parent = "Parent",
    Partner = "Partner",
    Spouse = "Spouse",
    Wife = "Wife",
    Husband = "Husband",
    Girlfriend = "Girlfriend",
    Boyfriend = "Boyfriend",
    Daughter = "Daughter",
    Son = "Son",
    Mother = "Mother",
    Father = "Father",
}

export enum SexDto {
    Male = "Male",
    Female = "Female",
}

export class UpdateRelationshipDto implements IUpdateRelationshipDto {
    validFrom?: Date | undefined;
    validTo?: Date | undefined;
    marriedOn?: Date | undefined;

    constructor(data?: IUpdateRelationshipDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.validFrom = _data["validFrom"] ? new Date(_data["validFrom"].toString()) : <any>undefined;
            this.validTo = _data["validTo"] ? new Date(_data["validTo"].toString()) : <any>undefined;
            this.marriedOn = _data["marriedOn"] ? new Date(_data["marriedOn"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): UpdateRelationshipDto {
        data = typeof data === 'object' ? data : {};
        let result = new UpdateRelationshipDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["validFrom"] = this.validFrom ? this.validFrom.toISOString() : <any>undefined;
        data["validTo"] = this.validTo ? this.validTo.toISOString() : <any>undefined;
        data["marriedOn"] = this.marriedOn ? this.marriedOn.toISOString() : <any>undefined;
        return data;
    }
}

export interface IUpdateRelationshipDto {
    validFrom?: Date | undefined;
    validTo?: Date | undefined;
    marriedOn?: Date | undefined;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}