namespace FamilyTree.Services.Abstractions;

public interface ILoginServiceFactory
{
    LoginService Get(string provider);
}
