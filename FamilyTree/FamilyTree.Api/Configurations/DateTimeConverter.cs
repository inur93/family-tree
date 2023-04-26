﻿using System.Text.Json;
using System.Text.Json.Serialization;

namespace FamilyTree.Api.Configurations;

public class DateTimeConverter : JsonConverter<DateTime>
{
    public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        return reader.GetDateTime().ToUniversalTime();
    }

    public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
    {
        ;
        writer.WriteStringValue(DateTime.SpecifyKind(value, DateTimeKind.Utc).ToUniversalTime());
    }
}
