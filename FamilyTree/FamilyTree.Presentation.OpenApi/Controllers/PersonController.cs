using FamilyTree.Contracts.Person;
using FamilyTree.Services.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FamilyTree.Presentation.OpenApi.Controllers;

[ApiController]
[Authorize]
[Route("api/person")]
[Produces("application/json")]
[Consumes("application/json")]
public class PersonController : ControllerBase
{
    private readonly IPersonService _personService;
    public PersonController(IPersonService personService)
    {
        _personService = personService;
    }

    [HttpGet]
    public async Task<IEnumerable<BasicPersonDto>> SearchPeople(
        [FromQuery] string? query,
        CancellationToken token)
    {
        return await _personService.GetByQuery(query, null, null, token);
    }

    [HttpGet("/{id}")]
    public async Task<PersonDto> GetPerson(
        [FromRoute] string id,
        CancellationToken token)
    {
        return await _personService.GetPerson(id, token);
    }

    [HttpGet("/{id}/related")]
    public async Task<IEnumerable<BasicPersonDto>> GetRelatedPeople(
        [FromRoute] string id,
        CancellationToken token)
    {
        return await _personService.GetRelatedPeople(id, token);
    }

    [HttpPost]
    public async Task<PersonDto> CreatePerson(
        [FromBody] CreatePersonDto person,
        CancellationToken token)
    {
        return await _personService.CreatePerson(person, token);
    }

    [HttpPut("{id}")]
    public async Task<PersonDto> UpdatePerson(
        [FromRoute] string id,
        [FromBody] CreatePersonDto person,
        CancellationToken token)
    {
        return await _personService.UpdatePerson(id, person, token);
    }

    [HttpDelete("{id}")]
    public async Task DeletePerson(
        [FromRoute] string id,
        CancellationToken token)
    {
        await _personService.DeletePerson(id, token);
    }
}
