using FamilyTree.Contracts.Relationship;
using FamilyTree.Services.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace FamilyTree.Presentation.OpenApi.Controllers;

[ApiController]
[Route("api/relationships")]
[Consumes("application/json")]
[Produces("application/json")]
public class RelationshipController : ControllerBase
{
    private readonly IRelationshipService _relationshipService;

    public RelationshipController(IRelationshipService relationshipService)
    {
        _relationshipService = relationshipService;
    }

    [HttpPost]
    public async Task<RelationshipDto> CreateRelationship(
        [FromBody] CreateRelationshipDto relationship, 
        CancellationToken token)
    {
        return await _relationshipService.CreateRelationship(relationship, token);
    }

    [HttpGet("{id}")]
    public async Task<RelationshipDto> GetRelationship(
        [FromRoute] string id,
        CancellationToken token)
    {
        return await _relationshipService.GetRelationship(id, token);
    }

    [HttpPut("{id}")]
    public async Task<RelationshipDto> UpdateRelationship(
        [FromRoute] string id,
        [FromBody] UpdateRelationshipDto relationship,
        CancellationToken token)
    {
        return await _relationshipService.UpdateRelationship(id, relationship, token);
    }

    [HttpDelete("{id}")]
    public async Task DeleteRelationship([FromRoute] string id, CancellationToken token)
    {
        await _relationshipService.DeleteRelationship(id, token);
    }
}
